# Jenkins pipeline to deploy movies-collection project to Kubernetes using Helm
pipeline:
  agent any
  environment:
    REGISTRY: "vikramsingh2580" # Replace with your Docker Hub or private registry URL
    APP_NAME: "movies-collection"
  stages:
    - stage: Checkout
      steps:
        script:
          - checkout scm

    - stage: Build Backend Image
      steps:
        script:
          - docker.build("${REGISTRY}/${APP_NAME}-backend", "./movies-collection-backend").push('latest')

    - stage: Build Frontend Image
      steps:
        script:
          - docker.build("${REGISTRY}/${APP_NAME}-frontend", "./movies-collection-frontend").push('latest')

    - stage: Deploy to Kubernetes
      steps:
        withKubeConfig([credentialsId: 'kubeconfig-credential-id']):
          sh """
          helm upgrade --install movies-collection ./helm-chart \
              --set backend.image=${REGISTRY}/${APP_NAME}-backend:latest \
              --set frontend.image=${REGISTRY}/${APP_NAME}-frontend:latest
          """
  post:
    always:
      steps:
        script:
          - cleanWs()
---