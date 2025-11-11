import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function ProjectDetail(){
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(()=>{
    api.get(`/projects/${slug}`)
      .then(res => setProject(res.data))
      .catch(console.error);
  }, [slug]);

  if(!project) return <div>Loading…</div>;

  return (
    <div>
      <h1 className="text-3xl">{project.title}</h1>
      <p className="text-sm">{project.tech_stack}</p>
      <div className="mt-4">
        <p>{project.description}</p>
        {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="underline">Visit project</a>}
      </div>
    </div>
  );
}
