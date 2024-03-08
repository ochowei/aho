let auth0 = null;

const fetchAuthConfig = () => fetch("./auth_config.json");

// 取得 config，並將 auth0 初始化
const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });

};


const login = async() => {
    await configureClient();

    // 使用者按下「登入」後，頁面轉到 Universal Login
    await auth0.loginWithRedirect({
      redirect_uri: window.location.origin + location.pathname
    });

  };