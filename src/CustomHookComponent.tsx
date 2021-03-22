import { useEffect, useMemo, useState } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<Payload>(
  url: string
): { data: Payload | null; done: boolean } {
  const [data, setdata] = useState<Payload | null>(null);
  const [done, setdone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setdata(d);
        setdone(true);
      });
  }, [url]);

  return { data, done };
}

function CustomHookcomponent() {
  const { data, done } = useFetchData<Beverage[]>("/customHookdata.json");

  const portLandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );

  return (
    <div>
      {portLandTaps.length && (
        <img alt="Bevarageimg logo" src={portLandTaps![0].logo} />
      )}
    </div>
  );
}

export default CustomHookcomponent;
