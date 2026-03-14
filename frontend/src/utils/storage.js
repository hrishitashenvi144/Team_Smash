const KEY = "resources";

export const getResources = () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveResource = (resource) => {
    const existing = getResources();
    const updated = [...existing, resource];
    localStorage.setItem(KEY, JSON.stringify(updated));
};