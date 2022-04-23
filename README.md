# BLOG-APP

###INSTALL DEPENDENCIES###

npm install

(json-server)
(ngrok)

###RODAR SERVIDOR LOCAL###

npm run db

###CONECTAR COM NGROK###

npm run tunnel

Copy IP URL and paste it at jsonServer.js inside the BLOG app



# ABOUT NGROK

### INSTALL NGROK ### 

curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null &&
              echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list &&
              sudo apt update && sudo apt install ngrok   
              
### CREATE ACCOUNT AT NGROK ###

Create an account and copy your Authtoken


### AUTHENTICATE ###

 ngrok authtoken <token>
