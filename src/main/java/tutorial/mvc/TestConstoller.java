package tutorial.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/")
public class TestConstoller {

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        return "view";
    }
}
