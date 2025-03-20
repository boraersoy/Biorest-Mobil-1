// aws-config.js
import AWS from 'aws-sdk';

// AWS SDK yap�land�rmas�
AWS.config.update({
  region: 'us-east-1',  // DynamoDB'nin bulundu�u b�lgeyi g�ncelleyin
  accessKeyId: 'YOUR_ACCESS_KEY_ID',  // IAM kullan�c� eri�im anahtar�n� buraya yaz�n
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'  // IAM kullan�c� gizli anahtar�n� buraya yaz�n
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
export default dynamoDB;
