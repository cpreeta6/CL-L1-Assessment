import { createProject } from '../../utils/projects';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate the request method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Get the session and validate the user's role
  const session = await getSession({ req });

  // Destructure the request body
  const { name, contributorId, approverId, reviewerId } = req.body;

  // Validate the required fields
  if (!name || !contributorId || !approverId || !reviewerId) {
    return res.status(400).json({ message: 'Bad Request: Missing required fields' });
  }

  // Create the new project
  const project = createProject(name, contributorId, approverId, reviewerId);

  // Return the created project
  return res.status(201).json({
    message: 'Project created',
    project,
  });
}
