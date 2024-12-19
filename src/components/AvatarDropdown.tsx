import React from 'react';
import { Dropdown, Text } from '@nextui-org/react';
import { IoMdPerson, IoMdSettings, IoMdLogOut } from 'react-icons/io';
import Avatar from 'react-avatar';

export default function AvatarDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger >
        <Avatar name="User" size="40" round={true} /> {/* Avatar clicável */}
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="User Actions">
        <Dropdown.Item key="profile" icon={<IoMdPerson />}>
          <Text>Perfil</Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" icon={<IoMdSettings />}>
          <Text>Configurações</Text>
        </Dropdown.Item>
        <Dropdown.Item key="logout" icon={<IoMdLogOut />}>
          <Text>Logout</Text>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
