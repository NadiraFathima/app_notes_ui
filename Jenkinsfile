pipeline {
    agent { dockerfile true }

 node {
   stage('checkout') {
   checkout scm
   }

   stage('Build') {
     sh 'node -v'
     sh 'npm --version'
     sh 'npm install'
   }
 }
}