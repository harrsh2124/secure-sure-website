echo "|-----------------------------------|"
echo "|        Starting deployment        |"
echo "|-----------------------------------|"

echo "|-----------------------------------|"
echo "|        Pulling latest code        |"
echo "|-----------------------------------|"
git pull

echo "|------------------------------------|"
echo "|        Install dependencies        |"
echo "|------------------------------------|"
yarn

echo "|----------------------------------|"
echo "|        Generating the build        |"
echo "|----------------------------------|"
yarn build

echo "|------------------------------|"
echo "|        Restart server        |"
echo "|------------------------------|"
pm2 restart secure-sure-website --update-env

echo "|-------------------------------------|"
echo "|        Deployment successful        |"
echo "|-------------------------------------|"