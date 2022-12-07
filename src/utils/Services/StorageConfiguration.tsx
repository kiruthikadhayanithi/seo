const StorageConfiguration = {
  sessionSetItem(key: any, value: any) {
    return localStorage.setItem(key, value);
  },

  sessionGetItem(key: any) {
    let value = localStorage.getItem(key);
    return value != null ? value : null;
  },

  sessionRemoveItem(key: any) {
    localStorage.removeItem(key);
  },

  sessionRemoveAllItem() {
    localStorage.clear();
  },
};

export default StorageConfiguration;
