const useSessionStorage = () => {
  const get = ({ key }: Readonly<{ key?: string }>): any => {
    const all = () => {
      const result: any = {};

      for (const [key, value] of Object.entries(sessionStorage)) {
        result[key] = value;
      }

      return result;
    };

    const item = key ? sessionStorage.getItem(key) : all();

    return item;
  };

  const set = ({
    key,
    value,
  }: Readonly<{ key: string; value: Readonly<Record<string, any>> | string }>) => {
    if (typeof value === "object") {
      return sessionStorage.setItem(key, JSON.stringify(value));
    }

    return sessionStorage.setItem(key, value);
  };

  return { get, set };
};

export { useSessionStorage };
