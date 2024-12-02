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
        withCredentials([usernamePassword(credentialsId: 'Docker_hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            docker.withRegistry('https://index.docker.io/v1/', 'Docker_hub') {
              docker.build("${REGISTRY}/${APP_NAME}-backend", "./movies-collection-backend").push('latest')
            }
          }
        }
      }
    }
    stage('Build Frontend Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'Docker_hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            docker.withRegistry('https://index.docker.io/v1/', 'Docker_hub') {
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
            bat '''
            set KUBECONFIG=C:\\Users\\vikra\\.kube\\config
            "C:\\Program Files\\windows-amd64\\helm.exe" upgrade --install movies-collection "G:\\Humber\\CCGC 5001-Virtuallization\\Project\\movies-collection\\movies-collection" \
                --set backend.image=vikramsingh2580/movies-collection-backend:latest \
                --set frontend.image=vikramsingh2580/movies-collection-frontend:latest
            '''
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
