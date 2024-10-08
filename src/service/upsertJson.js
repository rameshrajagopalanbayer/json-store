const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const {DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient({region: 'us-east-1'});

const ddbDocClient = DynamoDBDocumentClient.from(client);
const {GetCommand,UpdateCommand} = require("@aws-sdk/lib-dynamodb");

const getItem = async (req, res, next) => {
    const params = {
        TableName: 'json-store',
        Key: {
            id: req.params.id,
            category_code: req.params.category_code
        }
    };
    const command = new GetCommand(params);

    try {
        const response = await ddbDocClient.send(command);
        console.log('Item retrieved successfully');
        res.json(response);
    } catch (err) {
        console.error('Error retrieving item:', err);
    }
}

const upsertItem = async (req, res, next) => {
    const json = req.body;
    const params = {
        TableName: 'json-store',
        Key: {
            id: json.id,
            category_code: json.category_code
        },
        UpdateExpression: 'SET records = :records',
        ExpressionAttributeValues: {
            ":records": json.records,
        },
        ReturnValues: "ALL_NEW",
    };
    const command = new UpdateCommand(params);

    try {
        const response = await ddbDocClient.send(command);
        console.log('Item updated successfully');
        res.json(response);
    } catch (err) {
        console.error('Error updating item:', err);
    }
}

module.exports = {getItem, upsertItem};
