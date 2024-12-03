import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText, MediaUpload, InspectorControls } from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

registerBlockType("custom/team-member", {
  attributes: {
    members: {
      type: "array",
      default: []
    }
  },

  edit: ({ attributes, setAttributes }) => {
    const { members } = attributes;

    const addMember = () => {
      const newMember = {
        image: "",
        name: "Team Member Name",
        role: "Role",
        email: "email@example.com",
        phone: "+46 123456789",
        description: "Short description about this team member."
      };
      setAttributes({ members: [...members, newMember] });
    };

    const updateMember = (index, key, value) => {
      const updatedMembers = [...members];
      updatedMembers[index][key] = value;
      setAttributes({ members: updatedMembers });
    };

    const removeMember = (index) => {
      const updatedMembers = members.filter((_, i) => i !== index);
      setAttributes({ members: updatedMembers });
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Settings">
            <Button isSecondary onClick={addMember}>
              Add Team Member
            </Button>
          </PanelBody>
        </InspectorControls>
        <div {...useBlockProps({ className: "team-member-block" })}>
          {members.map((member, index) => (
            <div key={index} className="team-member-card">
              <MediaUpload
                onSelect={(media) => updateMember(index, "image", media.url)}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button onClick={open} isSecondary>
                    {member.image ? "Change Image" : "Upload Image"}
                  </Button>
                )}
              />
              {member.image && <img src={member.image} alt={member.name} />}
              <RichText
                tagName="h3"
                value={member.name}
                onChange={(value) => updateMember(index, "name", value)}
                placeholder="Enter name"
              />
              <RichText
                tagName="p"
                value={member.role}
                onChange={(value) => updateMember(index, "role", value)}
                placeholder="Enter role"
              />
              <RichText
                tagName="p"
                value={member.email}
                onChange={(value) => updateMember(index, "email", value)}
                placeholder="Enter email"
              />
              <RichText
                tagName="p"
                value={member.phone}
                onChange={(value) => updateMember(index, "phone", value)}
                placeholder="Enter phone number"
              />
              <RichText
                tagName="p"
                value={member.description}
                onChange={(value) => updateMember(index, "description", value)}
                placeholder="Enter description"
              />
              <Button isDestructive onClick={() => removeMember(index)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  },

  save: ({ attributes }) => {
    const { members } = attributes;

    return (
      <div className="team-member-block">
        {members.map((member, index) => (
          <div key={index} className="team-member-card">
            {member.image && <img src={member.image} alt={member.name} />}
            <RichText.Content tagName="h3" value={member.name} />
            <RichText.Content tagName="p" value={member.role} />
            <RichText.Content tagName="p" value={member.email} />
            <RichText.Content tagName="p" value={member.phone} />
            <RichText.Content tagName="p" value={member.description} />
          </div>
        ))}
      </div>
    );
  }
});
