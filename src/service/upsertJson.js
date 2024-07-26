const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const {DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient({region: 'us-east-1'});

const ddbDocClient = DynamoDBDocumentClient.from(client);
const {UpdateCommand} = require("@aws-sdk/lib-dynamodb");

const upsertItem = async (json) => {
    const params = {
        TableName: 'json-store',
        Key: {
            id: json.id,
            application_code: json.application_code
        },
        UpdateExpression: 'SET records = :records',
        ExpressionAttributeValues: {
            ":records": json.records,
        },
        ReturnValues: "ALL_NEW",
    };
    const command = new UpdateCommand(params);

    try {
        await ddbDocClient.send(command);
        console.log('Item updated successfully');
    } catch (err) {
        console.error('Error updating item:', err);
    }
}

module.exports = {upsertItem};
