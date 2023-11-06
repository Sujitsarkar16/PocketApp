import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./GroupModal.css";

function CreateGroupModal({
  showCreateGroupModal,
  closeCreateGroupModal,
  createGroup,
  groups,
  createGroups,
  selectGroup,
}) {
  const groupNameRef = useRef(null);

  const handleCreateGroup = () => {
    const groupName = groupNameRef.current.value;
    if (groupName) {
      createGroup(groupName);
      closeCreateGroupModal();
      groupNameRef.current.value = "";
    }
  };

  return (
    <div className="_container">
      <div className="group-Modal">
        <button className="btn-grp" onClick={createGroups}>
          <AddIcon></AddIcon>
          Create Notes Group
        </button>
        <ul className="group-list">
          {groups.map((group, index) => (
            <li
              className="group-key"
              key={index}
              onClick={() => selectGroup(group)}
            >
              {group}
            </li>
          ))}
        </ul>
        {showCreateGroupModal && (
          <div className="modal">
            <div className="modal-content">
              <span>Create New Notes Group</span>
              <input type="text" ref={groupNameRef} placeholder="Group Name" />

              <button className="create-btn" onClick={handleCreateGroup}>
                Create
              </button>
              <button className="close-btn" onClick={closeCreateGroupModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateGroupModal;
