pipeline {
  agent any
  environment {
    REGISTRY = "vikramsingh2580" // Replace with your Docker Hub or private registry URL
    APP_NAME = "movies-collection"
  }
  stages {
    stage('Checkout') {
      steps {
        script {
          checkout scm
        }
      }
    }
    stage('Build Backend Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
              docker.build("${REGISTRY}/${APP_NAME}-backend", "./movies-collection-backend").push('latest')
            }
          }
        }
      }
    }
    stage('Build Frontend Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
              docker.build("${REGISTRY}/${APP_NAME}-frontend", "./movies-collection-frontend").push('latest')
            }
          }
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        withKubeConfig([credentialsId: 'kubeconfig-credential-id']) {
          script {
            sh """
            helm upgrade --install movies-collection ./helm-chart \
                --set backend.image=${REGISTRY}/${APP_NAME}-backend:latest \
                --set frontend.image=${REGISTRY}/${APP_NAME}-frontend:latest
            """
          }
        }
      }
    }
  }
  post {
    always {
      script {
        cleanWs()
      }
    }
  }
}
