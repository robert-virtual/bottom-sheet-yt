import { Dispatch, FC } from "react";
import { View } from "react-native";

interface Props {
  visible: boolean;
  setVisible: Dispatch<React.SetStateAction<boolean>>;
}

export const Bottomsheet: FC<Props> = ({ children, visible, setVisible }) => {
  if (!visible) {
    return null;
  }
  return (
    <View
      onTouchEnd={() => setVisible(false)}
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffffffe2",
        position: "absolute",
      }}
    >
      <View
        style={{
          backgroundColor: "#f3f3f3",
          bottom: 10,
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          borderRadius: 10,
        }}
      >
        {children}
      </View>
    </View>
  );
};
