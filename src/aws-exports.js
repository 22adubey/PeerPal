/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": "https://hqb4msae6ratbgmlawjhy6fgfu.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-s4luvc7xvndshkkljx7waycgna",
    "aws_cognito_identity_pool_id": "us-east-2:7fbc4ed9-7278-4adf-afce-ee154d63ec64",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_WjgRHBQJF",
    "aws_user_pools_web_client_id": "3lh6rb3ooq2kc0s9eqch7vuqej",
    "oauth": {
        "domain": "peerpalec889d6c-ec889d6c-dev.auth.us-east-2.amazoncognito.com",
        "scope": [
            "phone", 
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:8081/",
        "redirectSignOut": "http://localhost:8081/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL",
        "PHONE_NUMBER"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
