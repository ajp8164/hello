import { useTheme } from 'theme';
import React from 'react';
import ListItem, { Props as ListItemProps } from 'components/atoms/ListItem';
import { Switch } from '@rneui/base';

export interface Props extends Omit<ListItemProps, 'value'> {
  disabled?: boolean;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const ListItemSwitch = (props: Props) => {
  const { disabled, value, onValueChange, ...rest } = props;

  const theme = useTheme();

  return (
    <ListItem
      rightContent={
        <Switch
          disabled={disabled}
          value={value}
          onValueChange={onValueChange}
          thumbColor={value ? theme.colors.switchOnThumb : theme.colors.switchOffThumb}
          ios_backgroundColor={theme.colors.switchOffTrack}
          trackColor={{
            false: theme.colors.switchOffTrack,
            true: theme.colors.switchOnTrack,
          }}
        />
      }
      {...rest}
    />
  );
};

export default ListItemSwitch;
