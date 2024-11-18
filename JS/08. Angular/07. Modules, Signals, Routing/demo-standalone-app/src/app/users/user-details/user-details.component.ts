import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];

    //the resolver way - view will not display until data comnes
    this.user = this.route.snapshot.data['user'];

    //The service way
    // this.userService.getSingleUser(userId).subscribe((user) => {
    //   this.user = user;
    // });

    // Subscribe for params in the url
    // this.route.params.subscribe(x => {
    //   console.log(x);

    // });
  }
}
