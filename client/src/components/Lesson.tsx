import { Button, Flex, Link as NavLink, Text } from "@radix-ui/themes";
import { Link, useParams } from "react-router-dom";

const Lesson = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Lesson {id}</h1>
      <Flex gap="3">
        <NavLink asChild>
          <Link to="exercises">exercises</Link>
        </NavLink>
        <NavLink asChild>
          <Link to="books">books</Link>
        </NavLink>
      </Flex>
      <Text as="p" mt="3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        tenetur ratione est, magni beatae quae repudiandae enim, possimus ipsam
        fugiat perspiciatis, aliquid molestias qui dignissimos a odit! Facilis,
        accusamus. Laborum?
      </Text>
      <Text as="p" mt="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        odio provident tempora, enim, id ab sapiente earum dolor, odit facilis
        similique. Cumque ullam natus eum dolore minus? Minus tempore iure animi
        rem! Porro vero, esse consequuntur officiis voluptatum aliquam libero.
        Provident eum, atque fuga tenetur sunt similique vel delectus
        accusantium blanditiis dicta a iure excepturi at, recusandae
        exercitationem veniam suscipit adipisci ipsam. Mollitia reprehenderit
        dicta, natus nam fugiat laudantium vel pariatur? Ullam fuga assumenda
        debitis eos suscipit ipsum officia consectetur aperiam sequi, alias sed
        inventore fugiat exercitationem commodi animi? Esse, minima. Animi
        itaque officia illo assumenda fugiat? Illo animi eaque natus, harum
        tempora tempore nemo officia architecto ea? Incidunt sunt dolorem dolore
        at animi magnam fugit, corrupti, tempore, nihil quisquam facere
        exercitationem quae expedita. Ducimus molestias maiores quasi dolores
        nihil vel minima minus! Commodi ab eos odit alias? Laborum ullam atque
        nam ea, odio perferendis obcaecati error non quas cupiditate veniam
        distinctio quo tenetur molestias quae, facilis eligendi eius amet a esse
        velit dignissimos itaque! Atque saepe impedit distinctio odio fugiat
        corporis ea alias illum? Quos dicta animi doloremque amet ipsa numquam
        quia tenetur accusamus sint officiis! Odio dolore debitis, veniam omnis
        animi, repellendus asperiores illum officia natus earum sint beatae
        porro consequuntur fugiat illo unde laudantium aut! Accusamus ratione
        fugit ullam placeat! Harum eligendi ipsum ipsa eum blanditiis pariatur
        est, accusamus minima perspiciatis. Nisi, unde. Nulla, dicta. Quidem
        voluptatem ipsa ab ipsam suscipit consequatur aliquid? Quis voluptate
        repudiandae hic totam dolores sequi, distinctio excepturi officiis
        perspiciatis sed nostrum natus cum odio, nobis vel cumque mollitia,
        repellat qui ipsam! Saepe vitae repellendus animi cum, quaerat aut
        aperiam nostrum sed possimus magnam odit vero dicta dolorum eius culpa
        suscipit provident non nam nesciunt? Cum nesciunt non error! Minima
      </Text>

      <Text as="p" mt="3">
        doloremque pariatur odio, iure illo at ipsa. Quas, recusandae nulla
        fugiat exercitationem quis illo ducimus aperiam, corrupti explicabo quia
        reprehenderit molestiae tempore, quaerat saepe. Illo sunt nesciunt
        repellat quaerat minus, quidem ullam sint quod eveniet iusto voluptas
        voluptate ab vero eligendi animi, saepe fuga quos. Maiores ipsa illo
        error vel earum porro quibusdam autem quis itaque inventore fugit
        repellendus nam temporibus deleniti laudantium voluptatum rerum rem,
        dolorem corrupti, laborum voluptatibus aliquam! Dolore quos, vel est
        optio incidunt dolores voluptatem omnis. Laudantium, dicta error nostrum
        repellendus tempora voluptatum est magni iste quis dolorum quasi dolore
        consectetur dignissimos impedit quas? Sunt, dolores atque placeat
        molestiae recusandae beatae quisquam perferendis iusto ducimus molestias
        rem dolorum. Nostrum amet quasi vel aperiam soluta. Delectus consequatur
        voluptates voluptas reiciendis temporibus numquam voluptatibus, dolorem
        excepturi cupiditate, facere, debitis cumque? Voluptatem odio rem
        debitis praesentium magni. Rerum non animi ab tenetur obcaecati soluta
        consequatur facilis dolorem deleniti, nulla dicta cumque, incidunt
        officia quia. Ipsam, eaque laboriosam ullam nostrum adipisci est
        cupiditate suscipit, dolores numquam at dolore alias tenetur
        reprehenderit voluptate aperiam pariatur repellat explicabo in quas
        magnam a molestias. Perferendis dolore beatae possimus, nulla quos
        officia quaerat nesciunt autem accusantium facilis sit eius ullam
        deserunt qui, ipsa quae, quidem obcaecati nam et iure? Expedita
        voluptatum ipsum, magnam fugiat reiciendis error temporibus.
      </Text>
      <Button variant="solid" mt="2">
        add exercise
      </Button>
      <Button variant="solid" mt="2" ml="2">
        add a review
      </Button>
      <Button variant="solid" mt="2" ml="2">
        publish
      </Button>
    </div>
  );
};

export default Lesson;
