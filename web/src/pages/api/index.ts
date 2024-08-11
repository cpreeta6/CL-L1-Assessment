import { createProject } from '../../utils/projects';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { deleteProject } from '../../utils/projects';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const session = await getSession({ req });
  const { name, contributorId, approverId, reviewerId } = req.body;

  if (!name || !contributorId || !approverId || !reviewerId) {
    return res.status(400).json({ message: 'Bad Request: Missing required fields' });
  }

  const project = createProject(name, contributorId, approverId, reviewerId);

  return res.status(201).json({
    message: 'Project created',
    project,
  });
}
