const getInstalledApp = () => {
  const storedAppSTR = localStorage.getItem("InstalledApp");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addInstalledApp = (id) => {
  const storedAppData = getInstalledApp();
  if (storedAppData.includes(id)) {
    // alert("This App is already Installed");
    return false;
  } else {
    storedAppData.push(id);
    const storedApp = JSON.stringify(storedAppData);
    localStorage.setItem("InstalledApp", storedApp);
    return true;
  }
  // console.log(storedAppData);
};

const removeInstalledApp = (id) => {
  const storedAppData = getInstalledApp();

  const removeableId = id.toString();

  const newAppData = storedAppData.filter((appId) => appId !== removeableId);

  const storedApp = JSON.stringify(newAppData);
  localStorage.setItem("InstalledApp", storedApp);
};

export { addInstalledApp, getInstalledApp, removeInstalledApp };
