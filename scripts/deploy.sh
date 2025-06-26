
#!/bin/bash

set -e

echo "🚀 Deploying Rotating Navigation App to Kubernetes"
echo "=================================================="

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl is not installed or not in PATH"
    exit 1
fi

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t rotating-nav-frontend:latest .

# Check if we're using minikube or kind and load the image
if kubectl config current-context | grep -q "minikube"; then
    echo "🔄 Loading image into Minikube..."
    minikube image load rotating-nav-frontend:latest
elif kubectl config current-context | grep -q "kind"; then
    echo "🔄 Loading image into Kind..."
    kind load docker-image rotating-nav-frontend:latest
fi

# Apply Kubernetes manifests
echo "📦 Applying Kubernetes manifests..."
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/postgres-pvc.yaml
kubectl apply -f k8s/postgres-init-configmap.yaml
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/redis-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/ingress.yaml

echo "⏳ Waiting for deployments to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/postgres-deployment -n rotating-nav-app
kubectl wait --for=condition=available --timeout=300s deployment/redis-deployment -n rotating-nav-app
kubectl wait --for=condition=available --timeout=300s deployment/frontend-deployment -n rotating-nav-app

echo "✅ Deployment complete!"
echo ""
echo "🌐 Access your application:"
echo "   NodePort: http://localhost:30080"
echo "   Port Forward: kubectl port-forward service/frontend-service 8080:80 -n rotating-nav-app"
echo ""
echo "🔍 Useful commands:"
echo "   kubectl get pods -n rotating-nav-app"
echo "   kubectl logs -f deployment/frontend-deployment -n rotating-nav-app"
echo "   kubectl get services -n rotating-nav-app"
