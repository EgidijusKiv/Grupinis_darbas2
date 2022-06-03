require('dotenv').config();

const {
  PORT,
  DB_URI,
  DB_NAME,
  USERS_COLLECTION,
  SERVICES_COLLECTION,
} = process.env;

const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
} = require('mongodb');

const client = new MongoClient(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.static('Front-End'));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// //////////////////////////////////////////////////////

app.get('/memberships', (req, res) => {
  client.connect(async () => {
    const collection = client.db(DB_NAME).collection(SERVICES_COLLECTION);
    const responce = await collection
      .find({})
      .toArray();
    client.close();
    const result2 = responce.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    res.json(result2);
  });
});

app.post('/memberships', (req, res) => {
  const newMembership = req.body;
  client.connect(async () => {
    const collection = client.db(DB_NAME).collection(SERVICES_COLLECTION);
    const result = await collection.insertOne({ ...newMembership });
    res.json(result);
    client.close();
  });
});

app.delete('/memberships/:id', (req, res) => {
  client.connect(async () => {
    const collection = client.db(DB_NAME).collection(SERVICES_COLLECTION);
    const result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
    client.close();
    res.json(result);
  });
});

app.get('/users/:order', (req, res) => {
  const order = Number(req.params.order);
  client.connect(async () => {
    const collection = client.db(DB_NAME).collection(USERS_COLLECTION);
    const result = await collection.find({ service_id: order }).toArray();
    client.close();
    res.json(result);
  });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  client.connect(async () => {
    const collection = client.db(DB_NAME).collection(USERS_COLLECTION);
    const result = await collection.insertOne({ ...newUser });
    res.json(result);
    client.close();
  });
});
