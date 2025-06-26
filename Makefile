
.PHONY: help build run stop clean deploy-k8s delete-k8s test

# Default target
help:
	@echo "Available commands:"
	@echo "  build        - Build Docker images"
	@echo "  run          - Run with Docker Compose"
	@echo "  stop         - Stop Docker Compose services"
	@echo "  clean        - Clean up Docker resources"
	@echo "  deploy-k8s   - Deploy to Kubernetes"
	@echo "  delete-k8s   - Delete from Kubernetes"
	@echo "  test         - Run tests"

# Docker commands
build:
	@echo "Building Docker images..."
	docker-compose build

run:
	@echo "Starting services with Docker Compose..."
	docker-compose up -d
	@echo "Application available at: http://localhost:3000"

stop:
	@echo "Stopping Docker Compose services..."
	docker-compose down

clean:
	@echo "Cleaning up Docker resources..."
	docker-compose down -v
	docker system prune -f

# Kubernetes commands
deploy-k8s:
	@echo "Deploying to Kubernetes..."
	@echo "Building and tagging Docker image..."
	docker build -t rotating-nav-frontend:latest .
	@echo "Applying Kubernetes manifests..."
	kubectl apply -f k8s/namespace.yaml
	kubectl apply -f k8s/configmap.yaml
	kubectl apply -f k8s/secrets.yaml
	kubectl apply -f k8s/postgres-pvc.yaml
	kubectl apply -f k8s/postgres-init-configmap.yaml
	kubectl apply -f k8s/postgres-deployment.yaml
	kubectl apply -f k8s/redis-deployment.yaml
	kubectl apply -f k8s/frontend-deployment.yaml
	kubectl apply -f k8s/ingress.yaml
	@echo "Waiting for deployments to be ready..."
	kubectl wait --for=condition=available --timeout=300s deployment/postgres-deployment -n rotating-nav-app
	kubectl wait --for=condition=available --timeout=300s deployment/redis-deployment -n rotating-nav-app
	kubectl wait --for=condition=available --timeout=300s deployment/frontend-deployment -n rotating-nav-app
	@echo "Deployment complete!"
	@echo "Access the app at: http://localhost:30080"

delete-k8s:
	@echo "Deleting Kubernetes resources..."
	kubectl delete namespace rotating-nav-app

test:
	@echo "Running tests..."
	@echo "Testing Docker Compose setup..."
	docker-compose ps
	@echo "Testing Kubernetes setup..."
	kubectl get pods -n rotating-nav-app

# Load Docker image into kind cluster (if using kind)
load-image-kind:
	@echo "Loading image into kind cluster..."
	kind load docker-image rotating-nav-frontend:latest

# Load Docker image into minikube (if using minikube)
load-image-minikube:
	@echo "Loading image into minikube..."
	minikube image load rotating-nav-frontend:latest
