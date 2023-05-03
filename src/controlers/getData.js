import Crew from "../models/crew.js";
import Destination from "../models/destination.js";
import Technology from "../models/technology.js";

export const destination = async (_, res) => {
  const data = await Destination.find();
  const newData = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
      images: data.images,
      description: data.description,
      distance: data.distance,
      travel: data.travel,
    };
  });

  return res.status(200).json(newData);
};

export const crew = async (_, res) => {
  const data = await Crew.find();
  const newData = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
      images: data.images,
      role: data.role,
      bio: data.bio,
    };
  });

  return res.status(200).json(newData);
};

export const technology = async (req, res) => {
  const { id } = req.params;
  const data = await Technology.find();
  const newData = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
      images: data.images,
      description: data.description,
    };
  });

  return res.status(200).json(newData);
};
