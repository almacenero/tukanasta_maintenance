#!/bin/bash

# Exit on any error
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i tukanasta-shh-key root@www.tukanasta.com 'cd /home/project/Tukanasta_Maintenance/development; git pull https://github.com/almacenero/tukanasta_maintenance.git development; cd frontend/;npm install; npm run build'


 
 	