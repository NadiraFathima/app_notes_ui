node {
    checkout scm
}
pipeline {
    agent { dockerfile true }

  stages {
   stage('Build') {
    steps {
     sh 'node -v'
     sh 'yarn --version'
     sh 'yarn'
     }
   }
  }
}