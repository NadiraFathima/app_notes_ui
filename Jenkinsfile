pipeline {
    agent { dockerfile true }
    checkout scm
  stages {
   stage('Build') {
    steps {
     sh 'node -v'
     sh 'npm --version'
     sh 'npm install'
     }
   }
  }
}