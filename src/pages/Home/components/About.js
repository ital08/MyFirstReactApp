import "../../../styles/bg.css";

import "../../../styles/img.css";
export const About = () => {
  return (
    <>
      <div class="bg">
        <div>
          <div class="ui inverted segment">
            <div class="ui inverted accordion">
              <div class="title">
                <i class="dropdown icon"></i>
                What is a dog?
              </div>
              <div class="content">
                <p class="transition hidden">
                  A dog is a type of domesticated animal. Known for its loyalty
                  and faithfulness, it can be found as a welcome guest in many
                  households across the world.
                </p>
              </div>
              <div class="title">
                <i class="dropdown icon"></i>
                What kinds of dogs are there?
              </div>
              <div class="content">
                <p>
                  There are many breeds of dogs. Each breed varies in size and
                  temperament. Owners often select a breed of dog that they find
                  to be compatible with their own lifestyle and desires from a
                  companion.
                </p>
              </div>
              <div class="title">
                <i class="dropdown icon"></i>
                How do you acquire a dog?
              </div>
              <div class="content">
                <p>
                  Three common ways for a prospective owner to acquire a dog is
                  from pet shops, private owners, or shelters.
                </p>
                <p>
                  A pet shop may be the most convenient way to buy a dog. Buying
                  a dog from a private owner allows you to assess the pedigree
                  and upbringing of your dog before choosing to take it home.
                  Lastly, finding your dog from a shelter, helps give a good
                  home to a dog who may not find one so readily.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://wakatime.com/badge/user/3ebdbb55-3b93-4f38-846f-1416a735ce36/project/53cf5e7d-bd40-4eaa-9022-e5a8d53012e6.svg"
            alt="wakatime"
          />
          <p> About</p>
        </div>
      </div>
    </>
  );
};
