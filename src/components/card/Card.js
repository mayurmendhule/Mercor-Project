import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Card = () => {
  const [isAddOpen, setAddOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [todoCards, setTodoCards] = useState([]);
  const [progressCards, setProgressCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);

  const handleAddToggle = () => {
    setAddOpen(!isAddOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddProject = () => {
    if (inputValue.trim() !== '') {
      const capitalizedProjectName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setProjects([...projects, capitalizedProjectName]);
      setInputValue('');
      setAddOpen(false);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleAddCard = (column) => {
    const newCard = {
      id: uuidv4(),
      title: 'New Card',
      description: 'Card Description',
    };

    switch (column) {
      case 'todo':
        setTodoCards([...todoCards, newCard]);
        break;
      case 'progress':
        setProgressCards([...progressCards, newCard]);
        break;
      case 'done':
        setDoneCards([...doneCards, newCard]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar-item2">
      <div className="myProject">
        <div className="sidebar-heading">My Project</div>
        <i className="bi bi-plus-square" onClick={handleAddToggle}></i>
      </div>

      {isAddOpen ? (
        <div className="add-project">
          <input
            type="text"
            placeholder="Project name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <i className="bi bi-check-square" onClick={handleAddProject}></i>
          <i className="bi bi-x-square" onClick={handleAddToggle}></i>
        </div>
      ) : (
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index} onClick={() => handleProjectClick(project)}>
              <span className='Projectname'>{project}</span>
              <i className="bi bi-three-dots" id='threedo'></i>
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <div className="project-details">
          <div className='SetectedCard'>
            <h3 className='Card1'>{selectedProject} <i className="bi bi-pencil"></i> <i className="bi bi-link"></i></h3>
            <span id='invite'><i className="bi bi-plus-square"></i>Invite</span>
          </div>
          <div className="project-options">
            <span className="project-option1">
              <i className="bi bi-funnel"> Filter <i className="bi bi-chevron-down" id='down'></i></i>
              <i className="bi bi-calendar4"> Todays <i className="bi bi-chevron-down" id='down'></i></i>
            </span>
            <div className="project-option2">
              <i className="bi bi-people" id='Shear'> Share</i>
              <span>|</span>
              <i className="bi bi-border-width"></i>
              <i className="bi bi-grid"></i>
            </div>
          </div>
          <div className="project-columns">
            <div className='Todo'>
              <div className="project-column">
                <div className="column-heading">To Do</div>
                <i className="bi bi-plus-square" onClick={() => handleAddCard('todo')}></i>
              </div>
              <div className="sidebar-line2"></div>
              {todoCards.map((card) => (
                <div key={card.id}>
                  {card.title}
                  <i className="bi bi-three-dots" id='threedo'></i>
                </div>
              ))}
            </div>
            <div className='Progress'>
              <div className="project-column1">
                <div className="column-heading">On Progress</div>
                <i className="bi bi-plus-square" onClick={() => handleAddCard('progress')}></i>
              </div>
              <div className="sidebar-line3"></div>
              {progressCards.map((card) => (
                <div key={card.id}>
                  {card.title}
                  <i className="bi bi-three-dots" id='threedo'></i>
                </div>
              ))}
            </div>
            <div className='Done'>
              <div className="project-column">
                <div className="column-heading">Done</div>
                <i className="bi bi-plus-square" onClick={() => handleAddCard('done')}></i>
              </div>
              <div className="sidebar-line4"></div>
              {doneCards.map((card) => (
                <div key={card.id}>
                  {card.title}
                  <i className="bi bi-three-dots" id='threedo'></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
