docker-compose -f docker-compose-mysql-service.yml up -d

mongosh -u admin -p yufixt2023 --authenticationDatabase admin

# Users MongoDB

mongosh -u "root" -p "#pwrusr$" --authenticationDatabase admin
mongosh -u "application" -p "#mdwusr$" --authenticationDatabase yufixdb
mongosh -u "app_dev" -p "#lwusr$" --authenticationDatabase yufixdb
