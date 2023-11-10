/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.9.0-alpine3.18' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run test:ci'
                sh 'npm run build'
            }
        }
    }
}