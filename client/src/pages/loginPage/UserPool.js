import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_ouFArkh6J",
    ClientId: "7haritsra4ojvce0ln0p12ar66",
}

export default new CognitoUserPool(poolData);