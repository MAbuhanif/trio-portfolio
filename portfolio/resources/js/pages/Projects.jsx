import React, {useEffect, useState} from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-4">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <article key={p.id} className="border rounded p-4">
            <h2 className="text-xl"><Link to={`/projects/${p.id}`}>{p.title}</Link></h2>
            <p>{p.tech_stack}</p>
            <p className="mt-2">{p.description?.slice(0,160)}…</p>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>}
          </article>
        ))}
      </div>
    </div>
  );
}
