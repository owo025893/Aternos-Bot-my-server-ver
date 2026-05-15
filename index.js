      - run: |
          echo '{"dependencies":{"mineflayer":"latest","bedrock-protocol":"latest"},"scripts":{"start":"node index.js"}}' > package.json
          cat <<EOF > index.js
          const mineflayer = require('mineflayer');
          const bot = mineflayer.createBot({
              host: 'Youtube-ng80.aternos.me',
              port: 26773,
              username: 'bot',
              version: '1.26.21.1'
          });
          bot.on('spawn', () => console.log('OK'));
          bot.on('error', (err) => console.log('Error:', err.message));
          EOF
