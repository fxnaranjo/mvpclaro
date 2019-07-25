'use strict';

exports.crearTomcat=function(req, res)
{
  console.log('Call to create tomcat function');

  const data = JSON.stringify({
    "kind": "Deployment",
    "apiVersion": "apps/v1",
    "metadata": {
        "name": "nginx-deployment",
        "labels": {
            "app": "nginx"
        }
    },
    "spec": {
        "replicas": 2,
        "selector": {
            "matchLabels": {
                "app": "nginx"
            }
        },
        "template": {
            "metadata": {
                "labels": {
                    "app": "nginx"
                }
            },
            "spec": {
                "containers": [
                    {
                        "name": "nginx",
                        "image": "nginx:1.7.9",
                        "ports": [
                            {
                                "containerPort": 80,
                                "protocol": "TCP"
                            }
                        ]
                    }
                ]}}}}
  );

const https = require('https')

const options = {
  hostname: '127.0.0.1',
  port: 8443,
  path: '/apis/apps/v1/namespaces/marketplace2/deployments',
  method: 'POST',
  headers: {
    "Content-Type": "application/json", 
    "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJtYXJrZXRwbGFjZTIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoicm9ib3QtdG9rZW4tenFoNzUiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoicm9ib3QiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI4OGQyZThjYi1hZjEwLTExZTktOGFmYS0wMDBjMjlhNGFmZTIiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6bWFya2V0cGxhY2UyOnJvYm90In0.HsILbxFnG5I4xKur_aLhbyFRC8v_SwFvTbJltxBMRETFUBfZ9bN9R492xrfKPY4R-L0Usvycc5dNijGgjYUogkztNUMivZtyphAtjpwu8zSujPS5qR1ty4OKWGkgKLnvjSJd30jZdj5Nk8OtnadlNpTdSDs6-rOQZYuLm8lgRVlYzZ-Fc0woTnKAM96PVODaqzgYNmCc5QkgHqvT67UnFzGCoHsUFKcg70k95Q1qKm8qD7rI8s3roPwHZJTgIGSyAeA0k6PMwYRf-xk7v2PKUNdIvPPP3GH-tcdTkz3zQvOUiAdvV8nEeToC5_PuZnqHerpuL2OT34YWgX1T0-Z4ww"
}
}

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const req2 = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req2.on('error', (error) => {
  console.error(error)
})

req2.write(data)
req2.end()





  res.send(true);
}