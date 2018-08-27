pipeline {
    agent { dockerfile true }
  stages {
   stage('checkout') {
   checkout scm
   }

   stage('Build') {
    steps {
     sh 'node -v'
     sh 'npm --version'
     sh 'npm install'
     }
   }
  }
}