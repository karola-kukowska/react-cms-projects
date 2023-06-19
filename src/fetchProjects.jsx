import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_KEY,
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CMS_API,
});

export const useFetchProjects = () => {
  const [loading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const arr = response.items.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          url: item.fields.url,
          image: item?.fields?.image?.fields?.file?.url,
        };
      });
      setProjects(arr);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return { loading, projects };
};
