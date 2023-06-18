import { MouseEvent } from 'react';

const Modal = ({ isOpen, handleModalClose }: IProps) => {
    if (!isOpen) {
        return null;
    }

    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (e.target.id === 'wrapper') {
            handleModalClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30"
            id="wrapper"
            onClick={handleCloseModal}
        >
            <div className="w-3/4 max-h-[70vh] bg-white p-2 rounded overflow-auto mt-20">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus labore unde reprehenderit deserunt accusamus, cum nihil
                quibusdam consequuntur ipsum vero nesciunt ab minus reiciendis
                est quos aut temporibus consequatur perferendis beatae eaque,
                ullam quaerat. Ipsam cupiditate quo maiores fugiat, vel
                accusamus nobis! Vero cumque dolore quo qui! Voluptatibus enim
                consectetur hic ipsa corrupti rem excepturi neque perspiciatis
                laudantium. Reprehenderit, nostrum est. Quia labore quidem
                tenetur nulla, in iste id voluptas, earum perferendis sunt fuga
                obcaecati sed voluptates quis natus beatae modi ipsum dolore
                unde dolorum cumque, facere incidunt commodi explicabo. Animi
                recusandae reiciendis quas dolorem at, quisquam rem tempore ea
                placeat a vitae beatae praesentium velit ab. Illo consequatur
                accusamus voluptate natus iure corporis porro quaerat, ad alias
                rem ullam! Tenetur error, inventore repellendus nam officia
                provident voluptate odio, corporis fugiat, rem quasi doloremque
                neque illum illo? Eum similique ipsa aut nihil, hic soluta.
                Eaque adipisci culpa, labore qui minima voluptatum dolores
                laboriosam, maxime recusandae quae dignissimos minus fuga
                necessitatibus sint iste rem. Eum impedit consequatur,
                doloremque fuga maxime nihil quis quia sapiente? Culpa placeat
                facilis officia dolor adipisci voluptatum quo dolorum enim iure
                modi distinctio consequuntur, optio nihil ipsum soluta officiis
                repellat velit dolorem, ratione temporibus error ullam eius?
                Quibusdam alias fuga ipsam tempora quam doloribus nam aperiam
                accusantium voluptatibus similique neque ad velit qui, nobis rem
                quidem quia at voluptate, nihil dignissimos aut, ipsa corporis
                earum. Fugiat consequuntur porro hic nisi reprehenderit velit,
                ratione commodi corporis tempore animi soluta quasi illo iste
                facilis libero autem molestias provident eveniet fuga, sapiente
                deleniti quaerat voluptates illum debitis. Earum laudantium
                doloremque fugit eos velit eligendi, deserunt perspiciatis vel,
                maiores distinctio repudiandae nulla molestiae, dignissimos ad
                aliquid vero laboriosam delectus aspernatur cum dolore. Modi
                distinctio magnam illo officiis nam autem aliquam rerum
                perferendis odit, eum molestias ullam tempore molestiae dolor
                quam eos labore iure nulla nisi! Cum adipisci laborum blanditiis
                vel qui ea eum esse fugiat. Obcaecati at enim architecto
                doloremque, aperiam ipsa in perspiciatis laudantium! Corporis
                enim fuga id recusandae ullam expedita odit quibusdam vitae
                exercitationem eveniet, commodi iure aliquam similique quod
                provident eum rerum sint repellendus explicabo! Magni
                reprehenderit blanditiis praesentium hic amet tempora omnis
                maiores autem quasi maxime nobis fugit, eum voluptatum non
                quidem laboriosam modi aut porro est nisi? Doloribus esse id
                ipsa debitis numquam cum quod suscipit. Laboriosam accusantium
                harum porro! Autem rerum suscipit voluptates sit, eveniet
                necessitatibus. Corporis sint odio ea, voluptatibus
                necessitatibus tenetur accusamus! Quaerat, ullam odit
                perferendis iste maiores nesciunt labore. Odit nihil mollitia
                aut. Quod saepe officia voluptatum nostrum! Libero voluptate
                cupiditate aut animi, soluta quibusdam harum exercitationem,
                fugit voluptatem cumque doloribus numquam totam aliquam commodi
                iste sunt. Maiores, debitis cumque? Voluptatibus est alias sequi
                suscipit culpa consequatur minima nihil ex illum. Quod sint,
                minus molestias quo cum esse veritatis rerum quaerat. Error
                expedita ea earum sed nisi quam facere cumque delectus, labore
                laboriosam dolorem quae? Deserunt cum, quo adipisci tenetur
                expedita dolores odit? Deserunt repudiandae eaque perferendis
                sit velit quasi quam, facere distinctio optio animi. Distinctio,
                esse aliquam! Minus, vero? Officia, perferendis sequi! Voluptate
                vitae rerum, deserunt minima officia ipsa harum, labore
                necessitatibus a optio quisquam error dolor quas, ea
                accusantium. Ex temporibus tempore, facere in voluptates magnam
                id impedit cum nemo eum laudantium eos officia, a quae maxime
                earum incidunt unde neque dolorem explicabo libero vero. Nisi
                nemo accusantium voluptatibus neque iste provident soluta vel
                hic quasi beatae suscipit ducimus facere, similique, error
                maiores sequi maxime aperiam. Recusandae esse est blanditiis
                laboriosam excepturi consequatur facere vero provident amet
                aliquid perspiciatis officiis aliquam rerum autem, illo sint
                reprehenderit labore numquam aperiam! Sed laborum voluptatem
                quod, sapiente, quo doloribus ipsum nesciunt nisi officiis
                voluptatibus pariatur incidunt at inventore obcaecati temporibus
                amet, placeat eius ut aliquid voluptatum! Dicta nostrum ex
                impedit ullam. Voluptatem eius nostrum inventore sequi
                necessitatibus iure sed laboriosam rem quidem reprehenderit
                consequatur natus nulla repellat qui deserunt debitis ipsa,
                minima et veritatis vitae, enim accusantium maxime corporis.
                Dignissimos eligendi fuga repudiandae ipsam voluptatum esse
                consequatur possimus ab dicta nihil, ducimus explicabo deleniti
                delectus voluptatem blanditiis velit mollitia deserunt quasi
                temporibus ad? Dolorum minima ipsam magni voluptas cumque
                eligendi in dolorem non cum illum? Enim inventore libero iste,
                aperiam corrupti repellat ipsa quisquam nihil illo, maxime
                molestias! Dolores saepe optio laboriosam animi perferendis!
                Ipsa, a reprehenderit sint architecto, numquam debitis quis
                doloribus voluptate nesciunt, vel beatae exercitationem quidem?
                Aperiam sunt, quam possimus iste tempora officia consequatur
                excepturi tempore omnis dolore nam fugit perferendis!
                Reprehenderit, laboriosam quam numquam dicta molestias provident
                nihil facilis error assumenda incidunt ratione a minus fugiat
                ullam veniam, odit aliquid nam nisi quae magni voluptatum eaque!
                Magnam sapiente qui laborum at recusandae tenetur tempora culpa
                quia! Inventore, culpa? Tempore ipsam veniam quod doloribus
                dignissimos laboriosam consectetur, accusantium dolorum expedita
                iure et numquam odio cumque odit magnam nisi illo. Quas omnis
                nobis aspernatur saepe, maiores dolor exercitationem.
                Architecto, quaerat odit. Voluptatum voluptatibus accusamus unde
                adipisci alias explicabo atque laudantium id similique tempora
                culpa, cum, sapiente fuga dignissimos doloremque molestiae iste
                porro cumque corporis. Nesciunt et quas asperiores quaerat
                dicta, mollitia id expedita earum nostrum, sit ratione laborum
                illum tempora consectetur ab odio omnis eligendi veritatis
                repellat, ex tenetur. Commodi id ipsum tempore iusto, explicabo
                possimus, corporis blanditiis est iure odit culpa quaerat. Ab,
                odio molestias alias quis recusandae perspiciatis nemo itaque!
                Unde dolorem ipsa expedita doloremque magnam officiis totam
                consectetur vero cum culpa ab reprehenderit distinctio
                laboriosam facilis voluptates commodi fugit, saepe amet
                deleniti, repellendus eos doloribus? Officia expedita ex
                temporibus perferendis quos sit laudantium id recusandae
                molestiae quisquam earum doloribus voluptatum, ipsam obcaecati
                nemo quas quam! Ratione commodi dolorum cum culpa. Vel natus
                quod modi corporis fugit repellendus quas, quisquam ipsam
                dolorem nobis laudantium distinctio odio optio rem enim
                provident quia molestias rerum quis maxime tempore perspiciatis.
                Vel veritatis eveniet praesentium maiores dolorum, incidunt
                quaerat, animi accusantium sunt nihil alias ipsum culpa
                architecto. Suscipit laborum, nihil commodi sed ut, ratione id
                excepturi maxime labore enim repudiandae nesciunt culpa earum
                quae perferendis harum inventore fugiat maiores quas itaque esse
                provident officia. Esse asperiores ducimus, deleniti laudantium
                voluptatum consequuntur laboriosam? Neque!
            </div>
        </div>
    );
};

export default Modal;

interface IProps {
    isOpen: boolean;
    handleModalClose: () => void;
}
