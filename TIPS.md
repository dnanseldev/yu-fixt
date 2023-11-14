docker-compose -f docker-compose-mysql-service.yml up -d

mongosh -u admin -p yufixt2023 --authenticationDatabase admin
