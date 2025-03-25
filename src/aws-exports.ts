const awsconfig = {
  Auth: {
    mandatorySignIn: true,
    region: "YOUR_REGION", // مثال: 'us-east-1'
    userPoolId: "YOUR_USER_POOL_ID", // المعرف الذي حصلت عليه من AWS
    userPoolWebClientId: "YOUR_APP_CLIENT_ID", // المعرف الخاص بالعميل
    authenticationFlowType: "USER_PASSWORD_AUTH", // نوع المصادقة
  },
};

export default awsconfig;
