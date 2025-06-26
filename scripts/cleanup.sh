
#!/bin/bash

echo "🧹 Cleaning up Rotating Navigation App from Kubernetes"
echo "====================================================="

# Delete namespace (this will delete all resources in the namespace)
kubectl delete namespace rotating-nav-app --ignore-not-found=true

echo "✅ Cleanup complete!"
echo "All resources have been removed from the Kubernetes cluster."
