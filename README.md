
# Rotating Navigation App - Kubernetes Deployment

A modern React application with rotating navigation, containerized and ready for Kubernetes deployment.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Kubernetes cluster (Minikube, Kind, or K3s)
- kubectl configured
- Make (optional, for using Makefile commands)

### Option 1: Docker Compose (Simplest)

```bash
# Build and run the application
make run

# Or manually:
docker-compose up -d
```

The application will be available at: http://localhost:3000

### Option 2: Kubernetes Deployment

```bash
# Deploy to Kubernetes
make deploy-k8s

# Or manually:
kubectl apply -f k8s/
```

The application will be available at: http://localhost:30080

## 📁 Project Structure

```
├── src/                    # React application source
├── k8s/                   # Kubernetes manifests
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile            # Container build instructions
├── Makefile              # Build and deployment automation
└── README.md            # This file
```

## 🐳 Docker Setup

### Services

- **Frontend**: React app served by Nginx
- **PostgreSQL**: Database for storing navigation logs
- **Redis**: Caching layer

### Commands

```bash
# Build images
make build

# Start services
make run

# Stop services
make stop

# Clean up
make clean
```

## ☸️ Kubernetes Setup

### Components

- **Namespace**: `rotating-nav-app`
- **Deployments**: Frontend (2 replicas), PostgreSQL, Redis
- **Services**: ClusterIP for internal communication, NodePort for frontend
- **ConfigMaps**: Application configuration
- **Secrets**: Database credentials
- **PVC**: Persistent storage for PostgreSQL
- **Ingress**: Custom domain routing (optional)

### Deployment Steps

1. **Ensure your Kubernetes cluster is running:**

   ```bash
   # For Minikube
   minikube start
   
   # For Kind
   kind create cluster
   
   # For K3s
   # Follow K3s installation guide
   ```

2. **Deploy the application:**

   ```bash
   make deploy-k8s
   ```

3. **Verify deployment:**

   ```bash
   kubectl get pods -n rotating-nav-app
   kubectl get services -n rotating-nav-app
   ```

4. **Access the application:**

   - **NodePort**: http://localhost:30080
   - **Port Forward**: `kubectl port-forward service/frontend-service 8080:80 -n rotating-nav-app`
   - **Ingress** (if configured): http://app.local

### Custom Domain Setup (Optional)

To use the Ingress with `app.local`:

1. Install an Ingress controller (like NGINX Ingress Controller)
2. Add `127.0.0.1 app.local` to your `/etc/hosts` file
3. Access the app at http://app.local

## 🧪 Testing

### Test Frontend

```bash
# Check if the frontend is responding
curl http://localhost:30080

# Or with port forwarding
kubectl port-forward service/frontend-service 8080:80 -n rotating-nav-app
curl http://localhost:8080
```

### Test Database Connection

```bash
# Connect to PostgreSQL
kubectl exec -it deployment/postgres-deployment -n rotating-nav-app -- psql -U app_user -d rotating_nav_db

# Run a test query
SELECT * FROM users;
```

### Test Redis

```bash
# Connect to Redis
kubectl exec -it deployment/redis-deployment -n rotating-nav-app -- redis-cli

# Test Redis connection
ping
```

## 🔧 Troubleshooting

### Common Issues

1. **Image not found**: Ensure Docker image is built and loaded into your cluster
   ```bash
   # For Minikube
   make load-image-minikube
   
   # For Kind
   make load-image-kind
   ```

2. **Pods not starting**: Check pod logs
   ```bash
   kubectl logs -f deployment/frontend-deployment -n rotating-nav-app
   ```

3. **Database connection issues**: Verify PostgreSQL is running
   ```bash
   kubectl get pods -n rotating-nav-app
   kubectl logs deployment/postgres-deployment -n rotating-nav-app
   ```

### Useful Commands

```bash
# View all resources
kubectl get all -n rotating-nav-app

# Describe a pod for detailed info
kubectl describe pod <pod-name> -n rotating-nav-app

# Check events
kubectl get events -n rotating-nav-app

# Delete and redeploy
make delete-k8s
make deploy-k8s
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   Frontend      │    │   PostgreSQL    │    │     Redis       │
│   (React/Nginx) │    │   (Database)    │    │    (Cache)      │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Kubernetes    │
                    │    Cluster      │
                    └─────────────────┘
```

## 📝 Features

- ✅ Multi-page React application with routing
- ✅ Rotating navigation animation
- ✅ Containerized with Docker
- ✅ Kubernetes-ready with proper manifests
- ✅ Database integration (PostgreSQL)
- ✅ Caching layer (Redis)
- ✅ Persistent storage
- ✅ Production-ready Nginx configuration
- ✅ Health checks and resource limits
- ✅ ConfigMaps and Secrets management
- ✅ Ingress support for custom domains

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with both Docker Compose and Kubernetes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
