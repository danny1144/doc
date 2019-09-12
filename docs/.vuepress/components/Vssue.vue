<<template>
    <div>
    <Vssue
    :title="title"
    :options="options"
  />
    </div>
</template>

<script>
import { VssueComponent } from "vssue";
import GithubV3 from "@vssue/api-github-v3";
import "vssue/dist/vssue.css";
export default {
  name: "VssueDemo",

  components: {
    Vssue: VssueComponent
  },

  data() {
    return {
      title: "Vssue Demo",
      options: {
        api: GithubV3,
        platform: "github",
        owner: "danny1144",
        repo: "doc",
        clientId: "9abda82f3bee54d41189",
        clientSecret: "85cdd9a9d4bfa63ee812b7aec8258ebe8cc90630"
      }
    };
  } 
};
</script>