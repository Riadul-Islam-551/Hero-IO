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
    alert("The App is Installed");
  } else {
    storedAppData.push(id);
    const storedApp = JSON.stringify(storedAppData);
    localStorage.setItem("InstalledApp", storedApp);
  }
  console.log(storedAppData);
};

export { addInstalledApp , getInstalledApp};
