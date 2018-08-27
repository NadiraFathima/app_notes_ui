node {
    checkout scm
}
pipeline {
    agent { dockerfile true }

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