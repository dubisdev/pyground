import { useLocationProperty, navigate } from "wouter/use-location";

const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

const hashNavigate = (to: string, ...args: any) => navigate("#" + to);

export const useHashLocation = () => {
    const location = useLocationProperty(hashLocation);
    return [location, hashNavigate] as [typeof location, typeof hashNavigate];
};
