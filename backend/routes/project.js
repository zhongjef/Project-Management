const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Project, validate } = require("../models/project");
const { User, userValidator } = require("../models/user");
const { team } = require("../models/team");

router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  // Invalid project id
  if (!ObjectId.isValid(projectId)) {
    console.log("Invalid Id", projectId);
    return res.status(404).send();
  }

  Project.findById(projectId)
    .then(project => {
      // No such project
      if (!project) {
        console.log("No such project");
        return res.status(404).send();
      } else {
        return res.send(project);
      }
    })
    .catch(err => res.status(500).send());
});

router.get("/details/:id", (req, res) => {
  const projectId = req.params.id;
  // Invalid project id
  if (!ObjectId.isValid(projectId)) {
    console.log("Invalid Id", projectId);
    return res.status(404).send();
  }

  Project.findById(projectId)
    .then(project => {
      // No such project
      if (!project) {
        console.log("No such project");
        return res.status(404).send();
      } else {
        let projectInfo = {
          name: project.name,
          description: project.description,
          teamList: []
        };
        getTeamList(project.teamList).then(lis => {
		  projectInfo.teamList = lis;
		  console.log(projectInfo)
		  res.send(projectInfo)
        });
      }
    })
    .catch(err => res.status(500).send());
});

async function getTeamList(lis) {
  result = [];
  for (let i = 0; i < lis.length; i++) {
    await Team.findById(lis[i]).then(team => {
		console.log("reach here")
      if (!team) {
        return res.status(404).send("A particular team not found");
      } else {
        result.push(team);
      }
    });
  }
  return result;
}

router.put("/:user_id", (req, res) => {
  let userId = req.params.user_id;
  let teamList = req.body.teamList || [];
  let name = req.body.name || "Invalid";
  let description = req.body.desc || "No description for this project";
  let proj_id = 0;
  Project.create({ name: name, teamList: teamList, description: description })
    .then(proj => {
      proj_id = proj._id;
      console.log(proj);
      return User.findById(userId);
    })
    .then(e => {
      console.log(e);
      e.manageProjects.push(proj_id);
      return e.save();
    })
    .then(e => {
      res.status(200).send("user saved successfully!");
    })
    .catch(err => {
      res.status(500).send("failed when trying to save the target!");
    });
});
module.exports = router;
