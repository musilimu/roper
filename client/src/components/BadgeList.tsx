import { Badge, Flex, badgePropDefs } from "@radix-ui/themes";

type BadgeProps = {
  color: (typeof badgePropDefs.color.values)[number];
  badge: string;
};

const BadgeList = ({ badges }: { badges: BadgeProps[] }) => {
  return (
    <Flex gap="2" mt="4">
      {badges.map(({ badge, color }) => (
        <Badge color={color} key={badge}>
          {badge}
        </Badge>
      ))}
    </Flex>
  );
};

export default BadgeList;
